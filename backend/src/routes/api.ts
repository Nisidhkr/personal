import { Router, Request, Response } from 'express';
import { hourlyMessages } from '../data/hourlyMessages';
import { galleryPhotos } from '../data/gallery';
import { Config } from '../types';

const router = Router();

// GET /api/hourly-messages
router.get('/hourly-messages', (req: Request, res: Response) => {
  try {
    res.json(hourlyMessages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch hourly messages' });
  }
});

// GET /api/gallery
router.get('/gallery', (req: Request, res: Response) => {
  try {
    // Construct full URLs for images
    const protocol = req.protocol;
    const host = req.get('host');
    const baseUrl = `${protocol}://${host}`;
    
    const photosWithFullUrls = galleryPhotos.map(photo => ({
      ...photo,
      url: `${baseUrl}${photo.url}`
    }));
    
    res.json(photosWithFullUrls);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch gallery photos' });
  }
});

// GET /api/config
router.get('/config', (req: Request, res: Response) => {
  try {
    const config: Config = {
      relationshipStartDate: '10-12-2020',
      heroPrimaryText: 'Happy Birthday, Tannu 💞',
      heroSecondaryText: 'Artist of my heart, redefining my world with your cutest smile.',
      specialMessage: 'Tannu universe me sabse jada pyari hai.'
    };
    res.json(config);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch config' });
  }
});

export default router;

