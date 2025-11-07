
interface Video {
  id: number
  src: string
  title: string
}

const VideoHighlights = () => {
  const videos: Video[] = [
    {
      id: 1,
      src: 'video/video1.mp4',
      title: 'Match Highlights',
    },
    {
      id: 2,
      src: 'video/video2.mp4',
      title: 'Training Grounds',
    },
  ]

  return (
    <section className="video-section">
      <h2>Latest Match Highlights</h2>
      <div className="video-container">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <video width={560} height={315} controls>
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>Match Highlights: {video.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default VideoHighlights

