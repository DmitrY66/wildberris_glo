const getGoods = () => {

  const links = document.querySelectorAll('.navigation-link');

  const getData = () => {
    fetch('./db/db.json',)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem('data', JSON.stringify(data))
      })
  };

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      getData();
    })
  })

  // localStorage.setItem('goods', JSON.stringify({ name: 'all' }))
  // const goods = JSON.parse(localStorage.getItem('goods'));
  // console.log('goods: ', goods);

  

};

getGoods();

