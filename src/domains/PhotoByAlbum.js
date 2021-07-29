import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getPhotos } from "../services/photos";

// Display photos which a title length <= to the limit in parameter

const Style = styled.div`
  color: black;
`;

const PhotosByAlbum = (props) => {
  const [photos, setPhotos] = useState([]);
  const [albums, setAlbums] = useState([]);
  const displayLimitSize = props.limit;

  useEffect(() => {
    const fetchPhotos = async () => {
      setPhotos(await getPhotos());
    }
    fetchPhotos();
  }, [setPhotos])

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

    const albums = [];
    datachanged.forEach((data) => {
      if (albums[data.albumId] && Array.isArray(albums[data.albumId])) {
        albums[data.albumId].push(data);
      } else {
        albums[data.albumId] = [data];
      }
    });
    setAlbums(albums);
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
