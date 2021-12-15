let result = document.getElementById("result");
import * as tools from "./HTML.js";
result.append(tools.CreaDiv("div", "si tous marche bien alors on voit mon text, sinon ça marche pas bien"));
result.append(tools.CreaLabel("label", "Email : ", "Label"));
result.append(tools.CreaInput("input", "email", "Label", ""));
result.append(tools.CreaLabel("label", "password", "user-password"));
result.append(tools.CreaInput("input", "password", "user-password", ""));