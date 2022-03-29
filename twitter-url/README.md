## What does Twitter URL scraper do?
Twitter URL scraper will enable you to get more data from [Twitter.com](https://twitter.com/home) than the official Twitter.com API.

Twitter URL scraper can scrape:
- User information, such as name, Twitter handle (username), location, follower/following count, profile URL/image/banner, date of creation
- List of tweets, retweets, and replies from profiles
- Statistics for each tweet: favorites, replies, and retweets for each tweet

## Why scrape Twitter.com?
Twitter.com has 217 million active daily users and is a great source of data for [marketing and research based on social media](https://apify.com/industries/marketing-and-media).

Here are just some of the ways you could use that data:
- Track discussions about your brand, products, country, or city.
- Monitor your competitors and their popularity, and get a competitive edge.
- Keep an eye on new trends and fashions as they emerge.
- Use the data to train AI models or for academic research.
- Track sentiment to make sure your investments are protected.
- Fight fake news by identifying the spreading pattern of misinformation.
- Explore discussions about travel destinations, services, amenities, and take advantage of local knowledge.
- Analyze consumer habits and develop new products or target underdeveloped niches.

If you would like more inspiration on how scraping Twitter.com could help your business or organization, check out our [industry pages](https://apify.com/industries).

## How to scrape Twitter.com
It's easy to scrape [Twitter.com](https://twitter.com/home) with Twitter URL scraper. Just follow these few steps and you'll get your data in a few minutes.

1. Click on Try for free.
2. Copy a URL from Twitter.com which you want to scrape and paste it to the actor.
3. Click on Start.
4. When Twitter URL scraper has finished, preview or download your data from the Dataset tab.

## Supported Twitter URL types

* Searches: https://twitter.com/search?q=tesla&src=typed_query
* Trending topics: https://twitter.com/search?q=%23FESTABBB21&src=trend_click&vertical=trends
* Profiles: https://twitter.com/elonmusk
* Statuses: https://twitter.com/elonmusk/status/1356381230925635591
* Topics: https://twitter.com/i/topics/933033311844286464
* Hashtag: https://twitter.com/hashtag/WandaVison
* Retweets with quotes: https://twitter.com/elonmusk/status/1356524205374918659/retweets/with_comments (requires login)
* Events: https://twitter.com/i/events/1354736314923372544

## How much will it cost to scrape Twitter.com?
Apify gives you with $5 free usage credits every month on the Apify Free plan. You can get 20,000 results per month from Twitter URL scraper for that, so those 20k results will be completely free!

But if you need to get more data regularly from Twitter.com, you should grab an Apify subscription. We recommend our $49/month Personal plan - you can get up to 200,000 every month with the $49 monthly plan! 

Or get 2 million results for $499 with the Team plan - wow!

## Results
The actor stores its results into the default dataset associated with the actor run. The data can be downloaded in machine-readable formats such as JSON, HTML, CSV or Excel.

Each item in the dataset will contain a separate tweet that follows this format:

```jsonc
{
  "user": {
    "id_str": "44196397",
    "name": "Elon Musk",
    "screen_name": "elonmusk",
    "location": "",
    "description": "",
    "followers_count": 42583621,
    "fast_followers_count": 0,
    "normal_followers_count": 42583621,
    "friends_count": 104,
    "listed_count": 59150,
    "created_at": "2009-06-02T20:12:29.000Z",
    "favourites_count": 7840,
    "verified": true,
    "statuses_count": 13360,
    "media_count": 801,
    "profile_image_url_https": "https://pbs.twimg.com/profile_images/1295975423654977537/dHw9JcrK_normal.jpg",
    "profile_banner_url": "https://pbs.twimg.com/profile_banners/44196397/1576183471",
    "has_custom_timelines": true,
    "advertiser_account_type": "promotable_user",
    "business_profile_state": "none",
    "translator_type": "none"
  },
  "id": "1338857124508684289",
  "conversation_id": "1338390123373801472",
  "full_text": "@CyberpunkGame The objective reality is that it is impossible to run an advanced game well on old hardware. This is a much more serious issue: https://t.co/OMNCTa9hJY",
  "reply_count": 792,
  "retweet_count": 669,
  "favorite_count": 17739,
  "hashtags": [],
  "symbols": [],
  "user_mentions": [
    {
      "screen_name": "CyberpunkGame",
      "name": "Cyberpunk 2077",
      "id_str": "821102114"
    }
  ],
  "urls": [
    {
      "url": "https://t.co/OMNCTa9hJY",
      "expanded_url": "https://www.pcgamer.com/the-more-time-i-spend-in-cyberpunk-2077s-world-the-less-i-believe-in-it/",
      "display_url": "pcgamer.com/the-more-time-…"
    }
  ],
  "url": "https://twitter.com/elonmusk/status/1338857124508684289",
  "created_at": "2020-12-15T14:43:07.000Z"
}
```

## Need a more advanced Twitter scraper?
If you need more detailed data from Twitter or need to use different input, try our [Twitter Scraper](https://apify.com/vdrmota/twitter-scraper). It's a little more complicated to set up, but you can customize it as you want.

You can read our step-by-step tutorial on [how to scrape Twitter](https://blog.apify.com/how-to-scrape-tweets-and-more-on-twitter-59330e6fb522/) if you need some guidance on how to run the scraper. Or you can always email support@apify.com for help.

## Custom Twitter scraping solution
If you want to scrape Twitter, but don't want to run the scraper yourself, you can [request a custom solution](https://apify.com/custom-solutions).

## Is it legal to scrape Twitter.com?
Note that personal data is protected by GDPR in the European Union and by other regulations around the world. You should not scrape personal data unless you have a legitimate reason to do so. If you're unsure whether your reason is legitimate, consult your lawyers. We also recommend that you read our blog post: [is web scraping legal?](https://blog.apify.com/is-web-scraping-legal/)
