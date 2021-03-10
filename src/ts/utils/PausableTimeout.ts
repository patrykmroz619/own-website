export class PausableTimeout {
    private time: number;
    private callback: () => void;
    private timeoutId?: NodeJS.Timeout;
    private startTime?: number;

    constructor(callback: () => void, time: number) {
        this.time = time;
        this.callback = callback;
    }

    public start(time?: number) {
        if (time) {
            this.time = time;
        }
        this.timeoutId = setTimeout(this.callback, this.time);
        this.startTime = Date.now();
    }

    public pause() {
        if (this.timeoutId && this.startTime) {
            clearTimeout(this.timeoutId);
            this.time -= Date.now() - this.startTime;
        }
    }

    public resume() {
        this.timeoutId = setTimeout(this.callback, this.time);
        this.startTime = Date.now();
    }
}
