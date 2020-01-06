import { useContext } from 'react';
import { SceneContext } from '../components/Scene';

export default function useScene() {
  return useContext(SceneContext);
}
