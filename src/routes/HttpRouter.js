import express from 'express';
import { PacketInspector } from '../models/PacketInspector.js';
import { DescribeRequest } from '../models/DescribeRequest.js';

export const router = express.Router();

router.get('/getAbout', (req, res) => {
    console.log('req.query: ', req.query); // GET 요청의 데이터는 보통 query로 들어옴
    res.json({ message: 'Success', data: req.query });
});

router.get('/getPacketInspector', PacketInspector.getPacket, DescribeRequest.describeRequestHeader, (req, res) => {
    // console.log(req);
    // console.log(res);
    // console.log('testse');
    console.log('in..')
    res.send({ message: 'Packet Inspector Route' });
})

