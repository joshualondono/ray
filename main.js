const Ray = function() {
  const ray = {
    length: 0,
    push: function(val){
      this[this.length] = val
      this.length++
    },
    pop: function(){
      const lastIndex = this.length - 1
      const toRmv = this[lastIndex]
      delete this[lastIndex]
      this.length--

      return toRmv
    },
    includes: function(val){
      lastIndex = this.length
      for(let i = 0; i < lastIndex; i++){
        if(this[i] === val){
          return true
        }

      }
     return false
   },
   indexOf: function(val){
     lastIndex = this.length

     for(let i = 0; i < lastIndex; i++){
       if(this[i] === val){
         return i
       }
     } return -1
 },
     shift: function(){

       const lastIndex = this.length - 1
       const toRmv = this[lastIndex]
       delete this[lastIndex]
       this.length--
       return this[0]
       delete this[0]
},
   unshift: function(val){
     const toRmv = this[0]
     this[0] = val
     this.length++
     for(let i = 1; i < this.length; i++){
       if(i === 1){
       this[i] = toRmv
     } else{
       this[i] = this[i]
     }
   }
}
}
  return ray
}


module.exports = Ray
