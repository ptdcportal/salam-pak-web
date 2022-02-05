/*
 * Extra typings definitions
 */

// Allow .json files imports
declare module '*.json';
declare module '*.jpg';
declare module '*.png';

// SystemJS module definition
declare var module: NodeModule;

interface NodeModule {
  id: string;
}
