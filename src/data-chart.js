
export default {
  set: function(allkeyword,Datas) {
    const datas = Datas
    this.keywordArray = [];
    const keywords = allkeyword;

    //turn object to arrays keywords
    this.allKeywords = keywords.map(function(value, index) {
      return value.word;
    });



    const result1 = Object.entries(datas)
    console.log("result1",result1) 
    const result2 = result1.map(function(value,index){
        return value[1].map(function(v){
            return {[v.keyword]:v.count}
        })
    })
    
    console.log("result2",result2);
    for(let i=0 ; i < result2.length ; i++){
        const value_outer = result2[i];

        console.log("value",value_outer)
        this.array_inner = new Array(this.allKeywords.length).fill(0);
        for(let j=0; j < value_outer.length ;j++ ){
            const  value_inner = value_outer[j];

            const find = this.allKeywords.findIndex(function(v){
                return v === Object.keys(value_inner).toString();
            })
            this.array_inner[find] = parseInt(Object.values(value_inner));
            console.log(this.array_inner)
        }

    this.keywordArray.push(this.array_inner)

    }
    console.log("done",this.keywordArray)

    //send to func
    this.chartData = createOneChart(
      this.allKeywords,
      this.keywordArray
    );

    return this.chartData;
  }
};

function createOneChart(allKeywords,keywordArray) {
  let ChartData = {
    type: "bar",
    data: {
      labels: allKeywords,
      datasets: [
        {
          label: "shopee",
          data: keywordArray[0],
          backgroundColor: "rgba(3, 252, 194,.5)",
          borderColor: "#36495d",
          borderWidth: 3
        },
          {
            label: "Amazon",
            data: keywordArray[1],
            backgroundColor: "rgba(0, 115, 230,.5)",
            borderColor: "#36495d",
            borderWidth: 3,
          },
          {
            label: "pantip",
            data: keywordArray[2],
            backgroundColor: "rgba(153, 102, 255,.5)",
            borderColor: "#36495d",
            borderWidth: 3,
          },
          {
            label: "JD",
            data: keywordArray[3],
            backgroundColor: "rgba(255, 51, 0,.5)",
            borderColor: "#36495d",
            borderWidth: 3,
          },
          {
            label: "Facebook",
            data: keywordArray[4],
            backgroundColor: "rgba(0, 60, 179,.5)",
            borderColor: "#36495d",
            borderWidth: 3,
          },
      ]
    },
    options: {
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              padding: 25
            }
          }
        ]
      }
    }
  };
  return ChartData;
}
