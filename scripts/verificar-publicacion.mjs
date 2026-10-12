import {readFileSync,statSync} from 'node:fs';
const files=JSON.parse(readFileSync(new URL('./archivos-publicacion.json',import.meta.url),'utf8'));
const root=new URL('../',import.meta.url);
const errors=[];
for(const file of files){
 try{
  const url=new URL(file,root),stat=statSync(url);
  if(!stat.isFile()||stat.size===0)errors.push(file+': archivo vacío o inválido');
  if(stat.size>25*1024*1024)errors.push(file+': supera 25 MiB');
  if(file.endsWith('.html')&&!/<html[\s>]/i.test(readFileSync(url,'utf8')))errors.push(file+': HTML inválido');
 }catch{errors.push(file+': falta el archivo');}
}
if(errors.length){console.error('Publicación detenida:\n'+errors.join('\n'));process.exit(1);}
console.log('Publicación verificada: '+files.length+' archivos presentes, incluida EUSK71.');
