const transformSongList = (songs) => {
  const songList = songs.map(song => {
    return {
      videoId: song.id.videoId,
      title: song.snippet.title,
      description: song.snippet.description,
      channel: song.snippet.channelTitle,
      img: song.snippet.thumbnails.default.url
    }
  });

  return songList;
}

module.exports = transformSongList
