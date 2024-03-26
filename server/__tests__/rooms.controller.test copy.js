import { expect } from 'chai';
import { RegisterRoom, getAllRoom, getRoomById, updateRoomById, deleteRoomById} from "../controllers/rooms.controller.js";
import Room from '../models/roomsModels.js';

describe('Room Controller Tests', () => {
    describe('POST /register', () => {
    it('should register a new room', async () => {
    });
  });


  describe('GET /room', () => {
    it('should get all room', async () => {
    });
  });

  describe('GET /rooms/:id', () => {
    it('should get a room by ID', async () => {
    });
  });

  describe('PUT /rooms/:id', () => {
      it('should update a room by ID', async () => {
      });
  });

  describe('DELETE /rooms/:id', () => {
    it('should delete a room by ID', async () => {
    });
  });
});
