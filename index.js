const YOUTUBE_SEARCH = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
  const query = {
    //q: `${searchTerm} in:name`,
    //per_page: 5
    part: 'snippet',
    key: 'AIzaSyCKv2Yz18-WhvRC-knLnmlVr6JsWm49cHY',
    q: searchTerm
  }
  $.getJSON(YOUTUBE_SEARCH, query, callback).fail(showErr);;
}

function createResults(data){
  console.log(data.items);
  let link;
  let result = data.items.map(item => link = `<a href =" https://youtube.com/watch?v=${item.id.videoId}"> <img src="${item.snippet.thumbnails.default.url}"> ${item.snippet.title}</a> <br>`);

  $('.js-search-results').html(result);

 // console.log(result);
}





function handleSubmit(){
  $('.js-search-form').submit(event => {
    event.preventDefault();
    const queryTarget = $(event.currentTarget).find ('.js-query');
    const query = queryTarget.val();
    queryTarget.val("");

    getDataFromApi(query, createResults);
  });
}

$(handleSubmit);