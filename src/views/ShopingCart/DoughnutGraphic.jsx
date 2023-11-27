import { Doughnut } from 'react-chartjs-2';
import { Chart, registerables } from "chart.js";
import 'chartjs-plugin-datalabels';
//import { useEffect, useState } from 'react';
//import { httpRequests } from '../../../utils/helpers/httpRequests';
Chart.register(...registerables);

const DoughnutGraphic = () => {
    /* const [dataValues, setDataValues] = useState({
      labels: [],
      data: [],
    }); */
/*   useEffect(() => {
    httpRequests()["get"]("http://localhost:3000/registro/graph/dataAprSystem", {})
      .then((res) => {
        console.log("Datos",res.data);
        let labels = []
        let data =[]
        for(const value of res.data.data){
          labels.push(Object.values(value)[0].split(" ")[0])
          data.push(Object.values(value)[1])
          
        }
        setDataValues({
          labels,
          data
        })

      });
  }, []); */



    const data = {
        labels: ["Proteina","Plan mensual","Entrenador"],
        datasets: [
          {
            data: [50,35,15], 
            backgroundColor: [ '#aaa', '#111', '#777'],
            hoverBackgroundColor:['#E57373', '#64B5F6', '#FFD54F'] ,
          },
        ],
      };
    

      const options = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        scales: {
          y: {
            display: false,
          },
        },
        elements: {
            arc: {
              borderRadius: 10,
            },
          },
      };

  return (
    <div className="box-border w-full h-full p-10">
      <Doughnut options={options} data={data} />
    </div>
  );
};
export default DoughnutGraphic;