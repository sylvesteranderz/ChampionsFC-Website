
interface NewsItem {
  id: number
  image: string
  title: string
  description: string
}

const News = () => {
  const newsItems: NewsItem[] = [
    {
      id: 1,
      image: '/Images/img1.jpg',  
      title: 'Team Wins Championship',
      description: 'Our team clinched the championship with a thrilling victory! Find out all the exciting moments from the match.',
    },
    {
      id: 2,
      image: '/Images/img2.jpg',
      title: 'Transfer News: Star Player Signs',
      description: 'Our star player has signed a new deal. Here\'s everything you need to know about the transfer.',
    },
    {
      id: 3,
      image: '/Images/img4.jpg',
      title: 'Injury Update: Key Player Recovering',
      description: 'Injury news: Our key player is on the road to recovery. Read more about the injury and rehabilitation process.',
    },
  ]

  return (
    <section className="news-section" id="news">
      <div className="container">
        <h2>Latest News</h2>
        <p>Stay up to date with the latest football news, match updates, and more.</p>
        <div className="news-cards">
          {newsItems.map((item) => (
            <div key={item.id} className="news-card">
              <img src={item.image} alt={item.title} />
              <div className="news-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href="#" className="read-more">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default News

