/**
 * CLI Progress bar to visually show completed progress
 */
class CLIProgress {
    private str_left
    private str_right
    private total = 0
    private current = 0
    private strtotal = 60
    /**
     * 
     * @param {number} total - total number of items
     * @param {string} str_left - progress status indicator
     * @param {string} str_right - empty status indicator
     */
    constructor(total: number,str_left: string,str_right: string){
        this.str_left="#";
        this.str_right=".";
        if(str_left)this.str_left=str_left;
        if(str_right)this.str_right=str_right;
        this.total = total;
        this.current=0;
        this.strtotal=60;//progress bar width。
    }

    /**
     * Update the progress bar with current data
     * @param {number} current 
     */
    update(current: number){
        this.current++;
        if(current)this.current=current;
        const dots=this.str_left.repeat((this.current % this.total) /this.total*this.strtotal);
        const left = this.strtotal - (this.current % this.total) /this.total*this.strtotal;
        let empty = this.str_right.repeat(left);
        if (this.current === this.total) {
            empty = this.str_left.repeat(this.strtotal)
        }
        process.stdout.write(`\r[${dots}${empty}] ${this.current/this.total * 100}% ${this.current} / ${this.total}\t`);
    }
}

export default CLIProgress