#!/usr/bin/env node

/**
 * Test script to verify SERA Business App is ready for deployment
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 SERA Business App - Deployment Test');
console.log('=====================================\n');

// Check required files
const requiredFiles = [
  'package.json',
  'next.config.js',
  'tsconfig.json',
  'tailwind.config.ts',
  'postcss.config.js',
  'vercel.json',
  'src/app/layout.tsx',
  'src/app/page.tsx',
  'src/app/globals.css'
];

let allFilesExist = true;

console.log('📁 Checking required files...');
requiredFiles.forEach(file => {
  const exists = fs.existsSync(file);
  const status = exists ? '✅' : '❌';
  console.log(`${status} ${file}`);
  if (!exists) allFilesExist = false;
});

// Check package.json
console.log('\n📦 Checking package.json...');
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const hasNext = packageJson.dependencies && packageJson.dependencies.next;
  const hasReact = packageJson.dependencies && packageJson.dependencies.react;
  const hasTailwind = packageJson.devDependencies && packageJson.devDependencies.tailwindcss;
  
  console.log(`${hasNext ? '✅' : '❌'} Next.js dependency`);
  console.log(`${hasReact ? '✅' : '❌'} React dependency`);
  console.log(`${hasTailwind ? '✅' : '❌'} Tailwind CSS dependency`);
  
  if (!hasNext || !hasReact || !hasTailwind) {
    allFilesExist = false;
  }
} catch (error) {
  console.log('❌ Error reading package.json');
  allFilesExist = false;
}

// Check build directory
console.log('\n🔨 Checking build status...');
const hasBuild = fs.existsSync('.next');
console.log(`${hasBuild ? '✅' : '❌'} Build directory (.next) exists`);

// Final status
console.log('\n=====================================');
if (allFilesExist && hasBuild) {
  console.log('🎉 SUCCESS: App is ready for deployment!');
  console.log('\nNext steps:');
  console.log('1. Push to GitHub: git add . && git commit -m "Ready for deployment" && git push');
  console.log('2. Deploy to Vercel: https://vercel.com/new');
  console.log('3. Import your repository and deploy');
} else {
  console.log('❌ ISSUES FOUND: Please fix the problems above before deploying');
  process.exit(1);
}
