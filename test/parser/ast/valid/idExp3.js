module.exports.getAst = function() {
    return `(Program
  (Block
    (=
      (IdExpression
        ([]
          (.
            (IdVariable
              (this)
            )
            (IdVariable
                (dict)
              )
          )
          (IdExpression
            (IdVariable
              (id)
            )
          )
        )
      )
      (IdExpression
        (IdVariable
          (value)
        )
      )
    )
  )
)`;
}
