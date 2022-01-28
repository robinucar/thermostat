import got from "got";
const handleReceiveResponse = (response) => {
  const responseBody = JSON.parse(response.body)
    console.log(responseBody);
};
got("https://api.github.com/repos/sinatra/sinatra").then(handleReceiveResponse);
