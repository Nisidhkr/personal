import React, { useState, useEffect, useRef } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from '../hooks/useWindowSize';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  life: number;
}

interface CakePiece {
  angle: number;
  offset: number;
  rotation: number;
}

interface RealisticCakeGameProps {
  onClose: () => void;
}

const RealisticCakeGame: React.FC<RealisticCakeGameProps> = ({ onClose }) => {
  const { width, height } = useWindowSize();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState<'idle' | 'cutting' | 'cut'>('idle');
  const [knifePos, setKnifePos] = useState({ x: 0, y: 0 });
  const [showKnife, setShowKnife] = useState(false);
  const [cakePieces, setCakePieces] = useState<CakePiece[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [cutProgress, setCutProgress] = useState(0);
  const animationFrameRef = useRef<number>();
  const lastTimeRef = useRef<number>(Date.now());

  // Cake configuration
  const cakeCenter = { x: 400, y: 300 };
  const cakeRadius = 120;

  // Handle mouse/touch movement
  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      const x = ((clientX - rect.left) / rect.width) * canvas.width;
      const y = ((clientY - rect.top) / rect.height) * canvas.height;

      setKnifePos({ x, y });
      setShowKnife(true);

      // Check if knife is near cake center for cutting
      if (gameState === 'idle') {
        const dx = x - cakeCenter.x;
        const dy = y - cakeCenter.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < cakeRadius) {
          setGameState('cutting');
        }
      }
    };

    const handleLeave = () => {
      setShowKnife(false);
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove);
    window.addEventListener('mouseleave', handleLeave);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('mouseleave', handleLeave);
    };
  }, [gameState]);

  // Cutting progress animation
  useEffect(() => {
    if (gameState === 'cutting') {
      const interval = setInterval(() => {
        setCutProgress(prev => {
          const next = prev + 0.05;
          if (next >= 1) {
            setGameState('cut');
            handleCut();
            return 1;
          }
          return next;
        });
      }, 16);

      return () => clearInterval(interval);
    }
  }, [gameState]);

  // Handle cake cut
  const handleCut = () => {
    // Create particles
    const newParticles: Particle[] = [];
    for (let i = 0; i < 30; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 4;
      newParticles.push({
        x: cakeCenter.x,
        y: cakeCenter.y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        size: 2 + Math.random() * 4,
        color: ['#FFF5E1', '#FFE4B5', '#FFDAB9', '#FFB6C1'][Math.floor(Math.random() * 4)],
        life: 1
      });
    }
    setParticles(newParticles);

    // Create cake pieces
    const angle = Math.atan2(knifePos.y - cakeCenter.y, knifePos.x - cakeCenter.x);
    setCakePieces([
      { angle: angle, offset: 0, rotation: 0 },
      { angle: angle + Math.PI, offset: 0, rotation: 0 }
    ]);

    // Show confetti
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  // Animation loop for particles and cake pieces
  useEffect(() => {
    const animate = () => {
      const now = Date.now();
      const deltaTime = (now - lastTimeRef.current) / 1000;
      lastTimeRef.current = now;

      // Update particles
      setParticles(prev => 
        prev
          .map(p => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + 9.8 * deltaTime * 10, // Gravity
            life: p.life - deltaTime
          }))
          .filter(p => p.life > 0 && p.y < 600)
      );

      // Update cake pieces
      if (gameState === 'cut') {
        setCakePieces(prev => 
          prev.map((piece, i) => ({
            ...piece,
            offset: Math.min(piece.offset + 0.5, 40),
            rotation: piece.rotation + (i === 0 ? 0.005 : -0.005)
          }))
        );
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [gameState]);

  // Draw on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw table surface with shadow
    ctx.fillStyle = '#E8D4B8';
    ctx.fillRect(0, 400, canvas.width, canvas.height - 400);
    
    // Table shadow
    ctx.fillStyle = 'rgba(0,0,0,0.1)';
    ctx.fillRect(0, 395, canvas.width, 10);

    if (gameState === 'idle') {
      // Draw whole cake
      drawCake(ctx, cakeCenter.x, cakeCenter.y, 0, 0);
    } else if (gameState === 'cutting') {
      // Draw cake with cut line
      drawCake(ctx, cakeCenter.x, cakeCenter.y, 0, 0);
      
      // Draw cutting line
      ctx.save();
      ctx.strokeStyle = 'rgba(200, 200, 200, 0.5)';
      ctx.lineWidth = 3;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(cakeCenter.x, cakeCenter.y);
      ctx.lineTo(knifePos.x, knifePos.y);
      ctx.stroke();
      ctx.restore();
    } else if (gameState === 'cut') {
      // Draw separated cake pieces
      cakePieces.forEach((piece) => {
        const offsetX = Math.cos(piece.angle) * piece.offset;
        const offsetY = Math.sin(piece.angle) * piece.offset;
        drawCake(ctx, cakeCenter.x + offsetX, cakeCenter.y + offsetY, piece.rotation, piece.angle);
      });
    }

    // Draw particles
    particles.forEach(p => {
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.life;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    });

    // Draw knife
    if (showKnife && gameState !== 'cut') {
      drawKnife(ctx, knifePos.x, knifePos.y);
    }
  }, [knifePos, showKnife, gameState, cakePieces, particles, cutProgress]);

  // Draw 3D-style cake
  const drawCake = (ctx: CanvasRenderingContext2D, x: number, y: number, rotation: number, _cutAngle: number) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);

    // Shadow
    ctx.fillStyle = 'rgba(0,0,0,0.2)';
    ctx.beginPath();
    ctx.ellipse(0, 80, cakeRadius + 10, 20, 0, 0, Math.PI * 2);
    ctx.fill();

    // Bottom layer (chocolate)
    drawCakeLayer(ctx, 0, 40, cakeRadius, 30, '#8B4513', '#654321');

    // Middle layer (cream)
    drawCakeLayer(ctx, 0, 10, cakeRadius, 30, '#FFF8DC', '#FFE4B5');

    // Top layer (frosting)
    drawCakeLayer(ctx, 0, -20, cakeRadius, 30, '#FFB6C1', '#FF69B4');

    // Top frosting decoration
    ctx.fillStyle = '#FF1493';
    ctx.beginPath();
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const px = Math.cos(angle) * (cakeRadius - 10);
      const py = Math.sin(angle) * (cakeRadius - 10) / 2 - 35;
      ctx.moveTo(px, py);
      ctx.arc(px, py, 5, 0, Math.PI * 2);
    }
    ctx.fill();

    // Candle
    if (gameState === 'idle') {
      drawCandle(ctx, 0, -60);
    }

    ctx.restore();
  };

  // Draw cake layer with 3D effect
  const drawCakeLayer = (ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, height: number, colorTop: string, colorSide: string) => {
    // Side
    ctx.fillStyle = colorSide;
    ctx.beginPath();
    ctx.ellipse(x, y + height / 2, radius, height / 2, 0, 0, Math.PI * 2);
    ctx.fill();

    // Top
    ctx.fillStyle = colorTop;
    ctx.beginPath();
    ctx.ellipse(x, y, radius, height / 2, 0, 0, Math.PI * 2);
    ctx.fill();

    // Highlight
    ctx.fillStyle = 'rgba(255,255,255,0.2)';
    ctx.beginPath();
    ctx.ellipse(x - radius / 3, y - 5, radius / 3, height / 3, 0, 0, Math.PI * 2);
    ctx.fill();
  };

  // Draw candle with flame
  const drawCandle = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
    // Candle
    ctx.fillStyle = '#FFD700';
    ctx.fillRect(x - 4, y, 8, 30);
    
    // Wick
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y - 8);
    ctx.stroke();

    // Flame
    const flameOffset = Math.sin(Date.now() / 100) * 2;
    ctx.fillStyle = '#FFA500';
    ctx.beginPath();
    ctx.ellipse(x, y - 12 + flameOffset, 6, 10, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.ellipse(x, y - 10 + flameOffset, 4, 7, 0, 0, Math.PI * 2);
    ctx.fill();
  };

  // Draw knife
  const drawKnife = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
    ctx.save();
    ctx.translate(x, y);
    
    // Calculate rotation towards cake center
    const angle = Math.atan2(cakeCenter.y - y, cakeCenter.x - x);
    ctx.rotate(angle - Math.PI / 4);

    // Blade
    const gradient = ctx.createLinearGradient(-40, -5, -40, 5);
    gradient.addColorStop(0, '#E0E0E0');
    gradient.addColorStop(0.5, '#FFFFFF');
    gradient.addColorStop(1, '#C0C0C0');
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(-50, 0);
    ctx.lineTo(0, -5);
    ctx.lineTo(0, 5);
    ctx.closePath();
    ctx.fill();

    // Blade edge highlight
    ctx.strokeStyle = 'rgba(255,255,255,0.8)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(-50, 0);
    ctx.lineTo(0, -4);
    ctx.stroke();

    // Handle
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(0, -6, 20, 12);
    
    ctx.fillStyle = '#A0522D';
    ctx.fillRect(0, -5, 20, 10);

    ctx.restore();
  };

  const resetGame = () => {
    setGameState('idle');
    setCutProgress(0);
    setCakePieces([]);
    setParticles([]);
    setShowConfetti(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      {/* Confetti */}
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={400}
          recycle={false}
          colors={['#FFD700', '#FFA500', '#FF69B4', '#FF1493', '#FFB6C1', '#F5A9A4']}
          gravity={0.25}
        />
      )}

      {/* Game Container */}
      <div className="relative bg-gradient-to-br from-pink-50 via-white to-pink-100 rounded-[32px] shadow-2xl border-2 border-pink-200/50 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-all duration-300 hover:scale-110 text-pink-800 hover:text-pink-900 text-xl font-bold shadow-lg"
          aria-label="Close game"
        >
          ×
        </button>

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          width={800}
          height={600}
          className="cursor-none"
          style={{ maxWidth: '100vw', height: 'auto' }}
        />

        {/* Instructions/Celebration Overlay */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          {gameState === 'idle' && (
            <div className="bg-white/90 backdrop-blur-sm rounded-[24px] px-8 py-4 shadow-xl animate-pulse">
              <p className="text-pink-800 font-semibold text-lg">
                🔪 Hover over the cake and cut it!
              </p>
            </div>
          )}
          
          {gameState === 'cut' && (
            <div className="animate-fade-in">
              <h2 className="text-5xl font-bold text-pink-600 text-center mb-4 animate-bounce" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
                🎉 Happy Birthday! 🎂
              </h2>
              <p className="text-2xl text-pink-500 text-center font-medium">
                Enjoy your special day, Tannu! ✨
              </p>
            </div>
          )}
        </div>

        {/* Control Buttons */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-10">
          {gameState === 'cut' && (
            <button
              onClick={resetGame}
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full font-semibold hover:from-pink-600 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              🔄 Cut Again
            </button>
          )}
          <button
            onClick={onClose}
            className="px-6 py-3 bg-white/90 text-pink-800 rounded-full font-semibold hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default RealisticCakeGame;

