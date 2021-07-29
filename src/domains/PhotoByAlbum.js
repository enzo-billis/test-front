import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Display photos which a title length <= to the limit in parameter

const Style = styled.div`
  color: black;
`;

const PhotosByAlbum = ({photos, limit}) => {
  const [albums, setAlbums] = useState([]);
  const displayLimitSize = limit;

  useEffect(() => {
    if(!photos || !photos.length) {
      return;
    }

    const t0 = performance.now();

    const dataSorted = photos.filter(
      (v) => v.title.length <= displayLimitSize
    );

    const datachanged = dataSorted
      .sort((a, b) => {
        return a.title.length > b.title.length;
      })
      .map((value) => {
        return {...value, title: value.title.toUpperCase()}
      });

    const newAlbums = [];
    datachanged.forEach((data) => {
      if (newAlbums[data.albumId] && Array.isArray(newAlbums[data.albumId])) {
        newAlbums[data.albumId].push(data);
      } else {
        newAlbums[data.albumId] = [data];
      }
    });
    setAlbums(newAlbums);
    const t1 = performance.now();
    console.log("Albums treatment took " + (t1 - t0) + " milliseconds.");
    // Divided by 43 the time used to treat the album
  }, [displayLimitSize, photos]);

  if(!albums || !albums.length) {
    return <Style>A ugly loader displayed during photos fetch and first albums treatment </Style>
  }


  return (
    <Style>
      {albums.map((value, key) => {
        return (
          <div key={key}>
            {value.map((photo, key) => {
              return <div key={key}>{photo.title}</div>;
            })}
            <hr />
          </div>
        );
      })}
    </Style>
  );
};

export default PhotosByAlbum;
