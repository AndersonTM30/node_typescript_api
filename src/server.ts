import './util/module-alias';
import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { ForecastController } from './controllers/forecast';
import { Application } from 'express';

export class SetupServer extends Server {
    constructor(private port = 3000) {
        super();
    }
    // https://youtu.be/OJYsN4DcLQQ?list=PLz_YTBuxtxt6_Zf1h-qzNsvVt46H8ziKh&t=568https://youtu.be/OJYsN4DcLQQ?list=PLz_YTBuxtxt6_Zf1h-qzNsvVt46H8ziKh&t=568
    public async init(): Promise<void> {
        this.setupExpress();
        this.setupControllers();
    }

    private setupExpress(): void {
        this.app.use(bodyParser.json());
    }

    private setupControllers(): void {
        const forecastController = new ForecastController();
        this.addControllers([forecastController]);
    }

    public getApp(): Application {
        return this.app;
    }
}
