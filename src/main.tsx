import renderer, { tsx, create } from "@dojo/framework/core/vdom";
import i18n from "@dojo/framework/core/middleware/i18n";
import { formatNumber } from "@dojo/framework/i18n/number";

const factory = create({ i18n });

const App = factory(function App({ middleware: { i18n } }) {
  if (!i18n.get()) {
    i18n.set({ locale: "de", rtl: false });
  }

  console.log("##### FORMATTING NUMBER ######");
  console.log(formatNumber(100000));

  return <div>hello</div>;
});

const r = renderer(() => <App />);
r.mount();
