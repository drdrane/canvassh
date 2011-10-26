define [
    'fabric'
    'Delicious_500'
], (fabric) ->
    console.log "ceating canvas"
    #Pass in our fabric module and call it's initialize function
    canvas = new fabric.Canvas "canvas"
    canvas.add(new fabric.Circle({ radius: 30, fill: '#f55', top: 100, left: 100 }));
    canvas.add(new fabric.Text('test',{
        left: 50
        top: 50
        fontFamily: 'delicious_500'
    }));