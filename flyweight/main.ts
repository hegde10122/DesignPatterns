import { MarkerPointFactory } from "./MarkerPointFactory";

export function main() {
  const factory = new MarkerPointFactory();

  //extrinsic state - coordinates and unique information

  const marker1 = factory.getmarkerPoint("garden-icon", "green");
  marker1.display(10, 30); //display the marker at position 10,30

  const marker2 = factory.getmarkerPoint("hospital-icon", "red");
  marker2.display(11, 32); //display the marker at position 11,32

  const marker3 = factory.getmarkerPoint("school-icon", "blue");
  marker3.display(12, 33); //display the marker at position 12,33

  const marker4 = factory.getmarkerPoint("garden-icon", "green");
  marker4.display(16, 49); //display the marker at position 16,49
}
main();
