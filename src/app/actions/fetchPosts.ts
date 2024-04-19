
export async function fetchPosts(page: number)  {
    let parts = <any[]>[];
    switch(page){
        case 1:
            parts = ["1"] as any[];
            break;    
        case 2 :     
            parts = ["2"] as any[];
            break;    
        case 3 :     
            parts = ["3"] as any[];
            break;    
        case 4 :     
            parts = ["4"] as any[];
            break;    
        case 5 :     
            parts = ["5"] as any[];
            break;    
        }

    return parts as any[]
    
}