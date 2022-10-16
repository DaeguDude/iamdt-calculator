import { CalculatorModel } from "./calculatorModel";
import { View } from "./view";
import "./style.css";

const view = new View(new CalculatorModel());
view.addEventHandlers();
