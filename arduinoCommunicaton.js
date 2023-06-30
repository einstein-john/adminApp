import { BleManager } from 'react-native-ble-plx';

const DEVICE_NAME = 'Arduino'; // Replace with the name of your Arduino Bluetooth device
const SERVICE_UUID = '00001101-0000-1000-8000-00805F9B34FB'; // Standard UUID
const CHARACTERISTIC_UUID = '00001101-0000-1000-8000-00805F9B34FB'; // Standard UUID

export default class ArduinoCommunication {
  constructor() {
    this.manager = new BleManager();
    this.device = null;
    this.serviceUUID = SERVICE_UUID;
    this.characteristicUUID = CHARACTERISTIC_UUID;
  }

  async connect() {
    try {
      await this.manager.startDeviceScan(null, null, (error, device) => {
        if (error) {
          console.error('Failed to scan devices', error);
          return;
        }

        if (device.name === DEVICE_NAME) {
          this.manager.stopDeviceScan();
          this.device = device;
          this.connectToDevice();
        }
      });
    } catch (error) {
      console.error('Failed to connect to Arduino', error);
    }
  }

  async connectToDevice() {
    try {
      await this.device.connect();
      const services = await this.device.discoverAllServicesAndCharacteristics();
      const characteristic = await this.findCharacteristic(services);
      this.characteristic = characteristic;
      console.log('Connected to Arduino');
    } catch (error) {
      console.error('Failed to connect to device', error);
    }
  }

  async findCharacteristic(services) {
    try {
      for (const service of services) {
        const characteristics = await service.characteristics();
        for (const characteristic of characteristics) {
          if (characteristic.uuid.toLowerCase() === this.characteristicUUID.toLowerCase()) {
            return characteristic;
          }
        }
      }
      throw new Error('Characteristic not found');
    } catch (error) {
      console.error('Failed to find characteristic', error);
    }
  }

  async sendInstruction(instruction) {
    if (!this.characteristic) {
      console.error('Not connected to device');
      return;
    }

    try {
      const data = Buffer.from(instruction, 'utf-8');
      await this.characteristic.writeWithResponse(data);
      console.log('Instruction sent:', instruction);
    } catch (error) {
      console.error('Failed to send instruction', error);
    }
  }

  async disconnect() {
    if (!this.device) {
      console.error('Not connected to device');
      return;
    }

    try {
      await this.device.cancelConnection();
      console.log('Disconnected from Arduino');
    } catch (error) {
      console.error('Failed to disconnect from device', error);
    }
  }
}
