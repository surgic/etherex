from serpent import compiler
t = open('compiler/tests.txt').readlines()
i = 0
while 1:
    o = []
    while i < len(t) and (not len(t[i]) or t[i][0] != '='): 
        o.append(t[i])
        i += 1
    i += 1
    print '================='
    text = '\n'.join(o).replace('\n\n','\n')
    print text
    ast = compiler.parse(text)
    print "AST:",ast
    print ""
    aevm = compiler.compile('\n'.join(t))
    print "AEVM:",aevm # ' '.join([str(x) for x in aevm])
    print ""
    code = compiler.compile_to_assembly(compiler.parse(aevm))
    print "Output:",' '.join([str(x) for x in code])
    if i >= len(t):
        break