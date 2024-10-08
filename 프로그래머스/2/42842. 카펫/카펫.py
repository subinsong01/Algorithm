def solution(brown, yellow):
    total_tiles = brown + yellow  
    
    for width in range(1, total_tiles + 1):
        if total_tiles % width == 0: 
            height = total_tiles // width  
            
            if width >= height:
                if (width - 2) * (height - 2) == yellow:
                    return [width, height]



