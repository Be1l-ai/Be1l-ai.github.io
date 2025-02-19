import requests
from bs4 import BeautifulSoup

url = "https://books.toscrape.com/"

try:
    response = requests.get(url)
    response.raise_for_status()

    soup = BeautifulSoup(response.text, "html.parser")

    books = soup.find_all("article", class_="product_pod")

    print("scraped Book data:\n")
    for book in books:
        title = book.h3.a["title"]
        price = book.find("p", class_="price_color").text
        print(f"Title: {title}")
        print(f"Price: {price}\n")

except requests.exceptions.RequestException as e:
    print(f"Error fetching the page: {e}")




