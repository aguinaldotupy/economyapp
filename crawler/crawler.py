import logging
import requests
from bs4 import BeautifulSoup

logging.basicConfig(
    format='%(asctime)s %(levelname)s:%(message)s',
    level=logging.INFO)


class Crawler:

    def __init__(self, url=None):
        if url is None:
            url = []
        self.urls_to_visit = url
    #
    # def download_url(self, url):
    #     return requests.get(url).text
    #
    # def get_linked_urls(self, url, html):
    #     soup = BeautifulSoup(html, 'html.parser')
    #     for link in soup.find_all('a'):
    #         path = link.get('href')
    #         if path and path.startswith('/'):
    #             path = urljoin(url, path)
    #         yield path
    #
    # def add_url_to_visit(self, url):
    #     if url not in self.visited_urls and url not in self.urls_to_visit:
    #         self.urls_to_visit.append(url)
    #
    # def crawl(self, url):
    #     html = self.download_url(url)
    #     for url in self.get_linked_urls(url, html):
    #         self.add_url_to_visit(url)

    def run(self):
        # while self.urls_to_visit:
        #     url = self.urls_to_visit.pop(0)
        #     logging.info(f'Crawling: {url}')
        #     try:
        #         self.crawl(url)
        #     except Exception:
        #         logging.exception(f'Failed to crawl: {url}')
        #     finally:
        #         self.visited_urls.append(url)
        response = requests.get(self.urls_to_visit)
        soup = BeautifulSoup(response.text, features="html.parser")
        # print(soup)
        table = soup.find(id="content").select("div:nth-child(11) > table > tr.odd")
        print('option:', 'JBSSI339')
        print('strike:', table[0].find('td').text)
        # print('strike:', soup.select("#content > div:nth-child(11) > table > tbody > tr.odd > td:nth-child(1)").text)
        print('current:', soup.find(id="quoteElementPiece1").text)
        print('min:', soup.find(id="quoteElementPiece12").text)
        print('max:', soup.find(id="quoteElementPiece13").text)


if __name__ == '__main__':
    Crawler(url='https://br.advfn.com/bolsa-de-valores/bovespa/jbssi339-ex-32-98-JBSSI339/cotacao').run()
