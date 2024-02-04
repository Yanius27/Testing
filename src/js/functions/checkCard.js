export default function checkCard(number) {
  const visa = ["44", "45", "40", "47", "49", "43"];
  const masterCard = ["53", "52", "27", "55", "2221", "51", "54"];
  const discover = "60";
  const amex = ["34", "37"];
  const mir = ["2202", "2200"];
  if (visa.find((el) => number.startsWith(el))) {
    return "visa";
  } else if (masterCard.find((el) => number.startsWith(el))) {
    return "masterCard";
  } else if (number.startsWith(discover)) {
    return "discover";
  } else if (amex.find((el) => number.startsWith(el))) {
    return "amex";
  } else if (mir.find((el) => number.startsWith(el))) {
    return "mir";
  }
}
