import './util/module-alias';
import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';

export class SetupServer extends Server {
    constructor(private port = 3000) {
        super();
    }
    // https://youtu.be/OJYsN4DcLQQ?list=PLz_YTBuxtxt6_Zf1h-qzNsvVt46H8ziKh&t=568https://youtu.be/OJYsN4DcLQQ?list=PLz_YTBuxtxt6_Zf1h-qzNsvVt46H8ziKh&t=568
    public init(): void {
        this.setupExpress();
    }

    private setupExpress(): void {
        this.app.use(bodyParser.json());
    }
}