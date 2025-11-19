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

interface AdvancedCakeGameProps {
  onClose: () => void;
}

const AdvancedCakeGame: React.FC<AdvancedCakeGameProps> = ({ onClose }) => {
  const { width, height } = useWindowSize();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState<'idle' | 'cutting' | 'lifting' | 'complete'>('idle');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showKnife, setShowKnife] = useState(false);
  const [cutProgress, setCutProgress] = useState(0);
  const [liftProgress, setLiftProgress] = useState(0);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const animationFrameRef = useRef<number>();

  // Positions
  const cakePos = { x: 300, y: 280 };
  const platePos = { x: 550, y: 320 };
  const cakeRadius = 100;

  // Handle mouse/touch movement
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleMove = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      const x = ((clientX - rect.left) / rect.width) * canvas.width;
      const y = ((clientY - rect.top) / rect.height) * canvas.height;

      setMousePos({ x, y });
      setShowKnife(true);
    };

    const handleClick = () => {
      if (gameState === 'idle') {
        // Check if clicking near cake
        const dx = mousePos.x - cakePos.x;
        const dy = mousePos.y - cakePos.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < cakeRadius + 50) {
          setGameState('cutting');
        }
      }
    };

    const handleLeave = () => {
      setShowKnife(false);
    };

    canvas.addEventListener('mousemove', handleMove);
    canvas.addEventListener('touchmove', handleMove);
    canvas.addEventListener('click', handleClick);
    canvas.addEventListener('touchstart', handleClick);
    canvas.addEventListener('mouseleave', handleLeave);

    return () => {
      canvas.removeEventListener('mousemove', handleMove);
      canvas.removeEventListener('touchmove', handleMove);
      canvas.removeEventListener('click', handleClick);
      canvas.removeEventListener('touchstart', handleClick);
      canvas.removeEventListener('mouseleave', handleLeave);
    };
  }, [gameState, mousePos.x, mousePos.y]);

  // Cutting animation
  useEffect(() => {
    if (gameState === 'cutting') {
      const interval = setInterval(() => {
        setCutProgress(prev => {
          const next = prev + 0.03;
          if (next >= 1) {
            // Generate crumb particles
            const newParticles: Particle[] = [];
            for (let i = 0; i < 20; i++) {
              const angle = Math.random() * Math.PI * 2;
              const speed = 1 + Math.random() * 3;
              newParticles.push({
                x: cakePos.x + 50,
                y: cakePos.y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed - 1,
                size: 2 + Math.random() * 3,
                color: ['#FFF5E1', '#FFE4B5', '#FFB6C1', '#F5DEB3'][Math.floor(Math.random() * 4)],
                life: 1
              });
            }
            setParticles(newParticles);
            setGameState('lifting');
            return 1;
          }
          return next;
        });
      }, 20);

      return () => clearInterval(interval);
    }
  }, [gameState]);

  // Lifting animation
  useEffect(() => {
    if (gameState === 'lifting') {
      const interval = setInterval(() => {
        setLiftProgress(prev => {
          const next = prev + 0.015;
          if (next >= 1) {
            setGameState('complete');
            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), 5000);
            return 1;
          }
          return next;
        });
      }, 16);

      return () => clearInterval(interval);
    }
  }, [gameState]);

  // Particle animation
  useEffect(() => {
    const animate = () => {
      setParticles(prev => 
        prev
          .map(p => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + 0.15, // Gravity
            life: p.life - 0.02
          }))
          .filter(p => p.life > 0 && p.y < 600)
      );

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Draw on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background gradient
    const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    bgGradient.addColorStop(0, '#FFE5EC');
    bgGradient.addColorStop(1, '#FFF0F5');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Table
    ctx.fillStyle = '#E8D4B8';
    ctx.fillRect(0, 400, canvas.width, canvas.height - 400);
    ctx.fillStyle = 'rgba(0,0,0,0.1)';
    ctx.fillRect(0, 395, canvas.width, 10);

    // Draw plate (always visible)
    drawPlate(ctx, platePos.x, platePos.y);

    // Draw main cake (minus slice if cut)
    if (gameState === 'idle' || gameState === 'cutting') {
      drawCake(ctx, cakePos.x, cakePos.y, false, cutProgress);
      
      // Show candle on whole cake
      if (gameState === 'idle') {
        drawCandle(ctx, cakePos.x, cakePos.y - 120);
      }
    } else {
      // Draw cake without slice
      drawCake(ctx, cakePos.x, cakePos.y, true, 1);
    }

    // Draw slice being lifted/placed
    if (gameState === 'lifting' || gameState === 'complete') {
      drawSlice(ctx, liftProgress);
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
    if (showKnife && (gameState === 'idle' || gameState === 'cutting')) {
      drawKnife(ctx, mousePos.x, mousePos.y);
    }

  }, [gameState, mousePos, showKnife, cutProgress, liftProgress, particles]);

  // Draw 3D cake
  const drawCake = (ctx: CanvasRenderingContext2D, x: number, y: number, sliced: boolean, sliceProgress: number) => {
    ctx.save();

    // Shadow
    ctx.fillStyle = 'rgba(0,0,0,0.15)';
    ctx.beginPath();
    ctx.ellipse(x, y + 90, cakeRadius + 10, 18, 0, 0, Math.PI * 2);
    ctx.fill();

    // Bottom layer - chocolate
    drawLayer(ctx, x, y + 50, cakeRadius, 35, '#8B4513', '#654321', sliced, sliceProgress);

    // Middle layer - vanilla cream
    drawLayer(ctx, x, y + 15, cakeRadius, 35, '#FFF8DC', '#FFE4B5', sliced, sliceProgress);

    // Top layer - strawberry frosting
    drawLayer(ctx, x, y - 20, cakeRadius, 35, '#FFB6C1', '#FF69B4', sliced, sliceProgress);

    // Frosting decorations
    if (!sliced) {
      ctx.fillStyle = '#FF1493';
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2;
        const px = x + Math.cos(angle) * (cakeRadius - 15);
        const py = y - 35 + Math.sin(angle) * 8;
        ctx.beginPath();
        ctx.arc(px, py, 4, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Cut line
    if (sliced || sliceProgress > 0) {
      ctx.strokeStyle = 'rgba(139, 69, 19, 0.5)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x, y - 50);
      ctx.lineTo(x + cakeRadius, y - 50 + 30);
      ctx.lineTo(x + cakeRadius, y + 85);
      ctx.stroke();
    }

    ctx.restore();
  };

  // Draw cake layer
  const drawLayer = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    radius: number,
    height: number,
    colorTop: string,
    colorSide: string,
    sliced: boolean,
    progress: number
  ) => {
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
    ctx.ellipse(x - radius / 3, y - 3, radius / 3, height / 3, 0, 0, Math.PI * 2);
    ctx.fill();

    // Show layers if sliced
    if (sliced || progress > 0) {
      const cutX = x + radius * progress;
      
      // Draw visible inner texture
      ctx.fillStyle = colorSide;
      ctx.fillRect(cutX - 2, y, 4, height);
      
      // Layer texture
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.fillRect(cutX - 1, y, 2, height);
    }
  };

  // Draw candle
  const drawCandle = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
    // Candle body
    const candleGradient = ctx.createLinearGradient(x - 5, 0, x + 5, 0);
    candleGradient.addColorStop(0, '#FFD700');
    candleGradient.addColorStop(0.5, '#FFA500');
    candleGradient.addColorStop(1, '#FFD700');
    
    ctx.fillStyle = candleGradient;
    ctx.fillRect(x - 5, y, 10, 35);
    
    // Wick
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y - 10);
    ctx.stroke();

    // Flame
    const flameY = y - 15 + Math.sin(Date.now() / 100) * 2;
    
    ctx.fillStyle = '#FFA500';
    ctx.beginPath();
    ctx.ellipse(x, flameY, 7, 12, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.ellipse(x, flameY + 2, 5, 9, 0, 0, Math.PI * 2);
    ctx.fill();
  };

  // Draw plate
  const drawPlate = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
    // Shadow
    ctx.fillStyle = 'rgba(0,0,0,0.1)';
    ctx.beginPath();
    ctx.ellipse(x, y + 8, 65, 10, 0, 0, Math.PI * 2);
    ctx.fill();

    // Plate
    const plateGradient = ctx.createRadialGradient(x, y - 5, 0, x, y, 60);
    plateGradient.addColorStop(0, '#FFFFFF');
    plateGradient.addColorStop(0.7, '#F5F5F5');
    plateGradient.addColorStop(1, '#E0E0E0');
    
    ctx.fillStyle = plateGradient;
    ctx.beginPath();
    ctx.ellipse(x, y, 60, 10, 0, 0, Math.PI * 2);
    ctx.fill();

    // Plate rim highlight
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(x, y - 2, 58, 8, 0, 0, Math.PI);
    ctx.stroke();
  };

  // Draw slice
  const drawSlice = (ctx: CanvasRenderingContext2D, progress: number) => {
    // Calculate position (lift up then move to plate)
    const startX = cakePos.x + 50;
    const startY = cakePos.y;
    const endX = platePos.x;
    const endY = platePos.y - 30;

    // Easing function
    const easeProgress = progress < 0.5 
      ? 2 * progress * progress 
      : 1 - Math.pow(-2 * progress + 2, 2) / 2;

    const currentX = startX + (endX - startX) * easeProgress;
    const currentY = startY + (endY - startY) * easeProgress - Math.sin(easeProgress * Math.PI) * 30;

    ctx.save();
    ctx.translate(currentX, currentY);

    // Slice shadow on plate
    if (progress > 0.7) {
      ctx.fillStyle = 'rgba(0,0,0,0.15)';
      ctx.beginPath();
      ctx.ellipse(endX - currentX, 60, 25, 5, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    // Draw slice layers
    const sliceWidth = 45;

    // Bottom (chocolate)
    ctx.fillStyle = '#654321';
    ctx.fillRect(-5, 30, sliceWidth, 30);
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(-3, 30, sliceWidth - 4, 28);

    // Middle (cream)
    ctx.fillStyle = '#FFE4B5';
    ctx.fillRect(-5, 0, sliceWidth, 30);
    ctx.fillStyle = '#FFF8DC';
    ctx.fillRect(-3, 0, sliceWidth - 4, 28);

    // Top (frosting)
    ctx.fillStyle = '#FF69B4';
    ctx.fillRect(-5, -30, sliceWidth, 30);
    ctx.fillStyle = '#FFB6C1';
    ctx.fillRect(-3, -30, sliceWidth - 4, 28);

    // Frosting top
    ctx.fillStyle = '#FF1493';
    ctx.beginPath();
    ctx.arc(10, -35, 4, 0, Math.PI * 2);
    ctx.arc(25, -35, 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  };

  // Draw knife
  const drawKnife = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
    ctx.save();
    ctx.translate(x, y);

    // Blade
    const bladeGradient = ctx.createLinearGradient(-50, -6, -50, 6);
    bladeGradient.addColorStop(0, '#E8E8E8');
    bladeGradient.addColorStop(0.5, '#FFFFFF');
    bladeGradient.addColorStop(1, '#D0D0D0');
    
    ctx.fillStyle = bladeGradient;
    ctx.beginPath();
    ctx.moveTo(-60, 0);
    ctx.lineTo(0, -6);
    ctx.lineTo(0, 6);
    ctx.closePath();
    ctx.fill();

    // Blade highlight
    ctx.strokeStyle = 'rgba(255,255,255,0.9)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(-60, 0);
    ctx.lineTo(0, -5);
    ctx.stroke();

    // Handle
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(0, -7, 25, 14);
    ctx.fillStyle = '#A0522D';
    ctx.fillRect(1, -6, 23, 12);

    ctx.restore();
  };

  const resetGame = () => {
    setGameState('idle');
    setCutProgress(0);
    setLiftProgress(0);
    setParticles([]);
    setShowConfetti(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-pink-900/40 via-purple-900/40 to-pink-900/40 backdrop-blur-sm">
      {/* Confetti */}
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={350}
          recycle={false}
          colors={['#FFD700', '#FFA500', '#FF69B4', '#FF1493', '#FFB6C1']}
          gravity={0.2}
        />
      )}

      {/* Game Container */}
      <div className="relative bg-white rounded-[32px] shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-pink-100 hover:bg-pink-200 flex items-center justify-center transition-all duration-300 hover:scale-110 text-pink-800 text-xl font-bold shadow-lg"
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
          style={{ maxWidth: '100vw', height: 'auto', display: 'block' }}
        />

        {/* Celebration Message */}
        {gameState === 'complete' && (
          <div className="absolute inset-0 flex items-end justify-center pointer-events-none pb-24">
            <div className="text-center animate-fade-in">
              <h2 
                className="text-6xl font-bold text-pink-600 mb-4"
                style={{
                  textShadow: '0 4px 20px rgba(236, 72, 153, 0.4)',
                  animation: 'bounce 1s ease-in-out'
                }}
              >
                🎉 Happy Birthday! 🎂
              </h2>
              <p className="text-2xl text-pink-500 font-medium">
                Enjoy your special day, Tannu! ✨
              </p>
            </div>
          </div>
        )}

        {/* Instructions */}
        {gameState === 'idle' && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="bg-white/95 backdrop-blur-sm rounded-[20px] px-8 py-4 shadow-xl border-2 border-pink-200 animate-pulse">
              <p className="text-pink-800 font-semibold text-lg text-center">
                🍰 Click on the cake to cut a slice!
              </p>
            </div>
          </div>
        )}

        {/* Control Buttons */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-10">
          {gameState === 'complete' && (
            <button
              onClick={resetGame}
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full font-semibold hover:from-pink-600 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              🔄 Play Again
            </button>
          )}
          <button
            onClick={onClose}
            className="px-6 py-3 bg-pink-100 text-pink-800 rounded-full font-semibold hover:bg-pink-200 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvancedCakeGame;

