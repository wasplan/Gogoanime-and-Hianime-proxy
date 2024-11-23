import express from 'express';
import { hlsProxy, qualityProxy, segmentProxy } from '../controllers/proxy';
import { hianimeHlsProxy, hianimeQaulityProxy, hianimeSegmentProxy } from '../controllers/hianime-proxy';

export const router = express.Router();

router.get('/hls-proxy', hlsProxy);

router.get('/quality-proxy', qualityProxy);

router.get('/segment-proxy', segmentProxy);

router.get('/hianime-hls-proxy', hianimeHlsProxy);

router.get('/hianime-quality-proxy', hianimeQaulityProxy);

router.get('/hianime-segment-proxy', hianimeSegmentProxy);