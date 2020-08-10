// import Client from "./client/client";
import CalMainFrame from "./app/cal-main-frame"

// const client: Client = new Client();
// client.main();

window.onload = function () {
  const calMain: CalMainFrame = new CalMainFrame('calculator');
}