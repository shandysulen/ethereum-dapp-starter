import { ArrowRight } from "lucide-react";
import React from "react";

export interface Announcement {
  readonly description: string;
  readonly link: string;
}

export interface AnnouncementBannerProps {
  readonly announcement: Announcement;
  readonly isDarkMode?: boolean;
}

export const AnnouncementBanner: React.FC<AnnouncementBannerProps> = ({
  announcement,
}) => {
  return (
    <div className='justify-center border-b py-4 shadow-sm backdrop-blur-lg'>
      <span className='lg:text-md text-sm'>{announcement.description}</span>
      <ArrowRight size={16} color='#0BC5EA' />
    </div>
  );
};
