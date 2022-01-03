#define SENSOR_H A0
#define SENSOR_L A1


void setup() {
  Serial.begin(9600);

}

void loop() {
 int sensor_humedad_analog = analogRead(SENSOR_H);
 // 0 sumergido en agua, a 1023 en el aire

 int sensor_luz_analog = analogRead(SENSOR_L);
 // 0 existe luz, a 1023 oscuridad total

 int sensor_humedad = (5 * sensor_humedad_analog * 100)/1024;
 int sensor_luz = (5 * sensor_luz_analog * 100)/1024;
 
 Serial.println(sensor_humedad);
 Serial.println();
 Serial.println(sensor_luz);

 delay(2000);
}
