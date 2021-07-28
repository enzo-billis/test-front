import React, { useEffect, useState } from "react";
import { getAvatar } from "../services/photos";

export const DisplayAPhoto = () => {
  const [photoUrl, setPhotoUrl] = useState(null);

  useEffect(() => {
    const fetchPhoto = async () => {
      const avatar = await getAvatar();
      setPhotoUrl(avatar.url);
    };
    fetchPhoto();
  }, []);

  return (
    <div>
      {photoUrl && <img width="50" src={photoUrl} alt="User profile avatar" />}
    </div>
  );
};
