import { AfterViewInit, Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';

HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  public ngAfterViewInit(): void {
    this.createChartLine();
  }

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  private createChartLine(): void {
    let date = new Date();
    const data: any[] = [];

    //date.setDate(date.setDate(new Date().getDate() - 1));
    //data.push([`${date.getDate()}/${date.getMonth() + 1}`, 45]);
    //data.push([date.setDate(new Date().getDate()), 55]);

    date.setDate(new Date().getDate() - 4);
    data.push([`${date.getDate()}/${date.getMonth() + 1}`, 42]);
    date.setDate(new Date().getDate() - 3);
    data.push([`${date.getDate()}/${date.getMonth() + 1}`, 42]);
    date.setDate(new Date().getDate() - 2);
    data.push([`${date.getDate()}/${date.getMonth() + 1}`, 45]);
    date.setDate(new Date().getDate() - 1);
    data.push([`${date.getDate()}/${date.getMonth() + 1}`, 55]);
    date.setDate(new Date().getDate());
    data.push([`${date.getDate()}/${date.getMonth() + 1}`, 48]);

    //for (let i = 0; i < 10; i++) {
    //  date.setDate(new Date().getDate() + i);
    //  data.push([`${date.getDate()}/${date.getMonth() + 1}`, this.getRandomNumber(0, 1000)]);
    //}

    const chart = Highcharts.chart('chart-line', {
      chart: {
        type: 'line',
      },
      title: {
        text: 'Questionnaire Result',
      },
      credits: {
        enabled: false,
      },
      legend: {
        enabled: true,
      },
      yAxis: {
        title: {
          text: null,
        },
      },
      xAxis: {
        type: 'category',
      },
      tooltip: {
        headerFormat: `<div>Date: {point.key}</div>`,
        pointFormat: `<div>{series.name}: {point.y}</div>`,
        shared: true,
        useHTML: true,
      },
      series: [
        {
          name: 'Questionnaires result',
          data,
        },
      ],
    } as any);
  }
}
