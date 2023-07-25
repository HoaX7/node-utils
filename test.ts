import { CLIProgress } from "."

const boot = () => {
    const progress = new CLIProgress(100, "#", ".")
    progress.update(20)
    console.log("downloading more data...")
    progress.update(60)
    progress.update(95)
}

boot()