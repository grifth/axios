axios.get('http://localhost:8081/books/1')
     .then(({data})=>{
    let originHtml = $('#app').html()
    let newHtml = originHtml.replace('__name__',data.name).replace('__number__',data.number)
    $('#app').html(newHtml)
})

$('#app').on('click','#add',()=>{
  var oldN = $('#number').text()
  var newN = oldN - 0 + 1
  axios.post('http://localhost:8081/books/1',{
    number:newN
  }).then(()=>{
    $('#number').text(newN)
  })
})

$('#app').on('click','#minus',()=>{
  var oldN = $('#number').text()
  var newN = oldN - 0 -1
  axios.post('http://localhost:8081/books/1',{
    number:newN
  }).then(()=>{
    $('#number').text(newN)
  })
})

$('#app').on('click','#reset',()=>{
      axios.post('http://localhost:8081/books/1',{
        number:0
      }).then(()=>{
        $('#number').text(0)
      })
})
