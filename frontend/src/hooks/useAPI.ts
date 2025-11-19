import { useState, useEffect } from 'react';
import axios from 'axios';
import { HourlyMessage, Photo, Config } from '../types';

// In production, use relative URLs (same origin). In development, use localhost
const API_BASE_URL = import.meta.env.VITE_API_URL || (import.meta.env.PROD ? '' : 'http://localhost:3001');

export const useHourlyMessages = () => {
  const [messages, setMessages] = useState<HourlyMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get<HourlyMessage[]>(`${API_BASE_URL}/api/hourly-messages`);
        setMessages(response.data);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch hourly messages:', err);
        setError('Failed to load messages');
        // Fallback messages
        setMessages([
          { hour: 0, text: "Tannu, tumhare bina dunya adhuri hai 💞", img: "" },
          { hour: 1, text: "Mera favourite time = jab mai tumse baat karta hun 🫶", img: "" },
          { hour: 2, text: "Tannu universe me sabse jada pyari hai 💕", img: "" },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return { messages, loading, error };
};

export const useGallery = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await axios.get<Photo[]>(`${API_BASE_URL}/api/gallery`);
        setPhotos(response.data);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch gallery:', err);
        setError('Failed to load gallery');
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  return { photos, loading, error };
};

export const useConfig = () => {
  const [config, setConfig] = useState<Config | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await axios.get<Config>(`${API_BASE_URL}/api/config`);
        setConfig(response.data);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch config:', err);
        setError('Failed to load config');
      } finally {
        setLoading(false);
      }
    };

    fetchConfig();
  }, []);

  return { config, loading, error };
};

