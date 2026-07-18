pub struct RAGService;

impl RAGService {
    pub fn new() -> Self {
        Self
    }

    pub fn build_context(&self, query: &str, documents: &[(&str, f64)]) -> String {
        let mut context = String::new();
        context.push_str(&format!("Query: {}\n\n", query));
        context.push_str("Relevant information:\n");

        for (doc, score) in documents {
            context.push_str(&format!("- [relevance: {:.2}] {}\n", score, doc));
        }

        context
    }
}
