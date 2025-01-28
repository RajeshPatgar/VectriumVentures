import { useState, useEffect } from 'react';
import { userProfile } from '@/public/data/user-profile';
import type { UserProfile } from '@/lib/types/profile';

export function useProfile() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      setProfile(userProfile);
    } catch (error) {
      console.error('Error loading profile:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { profile, loading };
}