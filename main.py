import time
import requests

def check_website(url):
    try:
        response = requests.get(url)
        if response.status_code == 200:
            print(f"{time.ctime()}: {url} is up!")
        else:
            print(f"{time.ctime()}: {url} is down! Status code: {response.status_code}")
    except requests.exceptions.RequestException as e:
        print(f"{time.ctime()}: {url} is down! Exception: {e}")

if __name__ == "__main__":
    # url_to_check = "https://social-media-9nzi.onrender.com/"  # Replace with the URL you want to check
    # while True:
    #     check_website(url_to_check)
    #     time.sleep(60)  # Wait for 60 seconds
    print("Hello, Lesan Abbas")
