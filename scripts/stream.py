import requests
import json

r = requests.get("https://api.sportradar.com/soccer/trial/v4/stream/events/subscribe",
    params = {'api_key': '7hb3ckndj9yz8spvng4h3gy4', 'format': 'json', 'sport_event_id': 'sr:sport_event:41892961'},
    allow_redirects=False)

print(r)
# redirect_url = r.headers['Location']
# r = requests.get(redirect_url, stream=True)

# for line in r.iter_lines():
#     # filter out keep-alive new lines
#     if line:
#         decoded_line = line.decode('utf-8')
#         print(json.loads(decoded_line))