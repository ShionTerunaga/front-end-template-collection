import { errorExit, notify, run } from "./main";

run()
    .then((path) => notify(path))
    .catch(() => errorExit());
