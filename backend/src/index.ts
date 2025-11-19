import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import apiRoutes from './routes/api';

const app: Express = express();
const PORT = process.env.PORT || 3001;
const isProduction = process.env.NODE_ENV === 'production';

// Middleware
app.use(cors({
  origin: isProduction 
    ? process.env.FRONTEND_URL || '*'
    : ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:3000'],
  credentials: true
}));
app.use(express.json());

// Serve static files from public directory
app.use('/images', express.static(path.join(__dirname, '../public/images')));
app.use('/videos', express.static(path.join(__dirname, '../public/videos')));

// API Routes
app.use('/api', apiRoutes);

// Health check
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'Backend is running!' });
});

// Serve frontend static files in production
if (isProduction) {
  const frontendPath = path.join(__dirname, '../../frontend/dist');
  app.use(express.static(frontendPath));
  
  // Handle client-side routing - send all non-API requests to index.html
  app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
  });
}

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
  console.log(`📡 API endpoints available at http://localhost:${PORT}/api`);
  if (isProduction) {
    console.log(`🌐 Serving frontend from /frontend/dist`);
  }
});

