const anagrams = ['Awda', 'adwa']

isAnagram(anagrams[0], anagrams[1], (result: boolean) => console.log(result))

function isAnagram(
    stringA: string, 
    stringB: string,
    result: any
): void
{
    return result(cleanString(stringA) === cleanString(stringB))
}

function cleanString(str: string): string{
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
  }




